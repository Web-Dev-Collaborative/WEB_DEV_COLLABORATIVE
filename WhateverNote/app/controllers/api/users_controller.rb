class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.user_icon ||= "crush"
        if @user.save
            login!(@user)
            notebook = Notebook.create!(name: "My Notebook", author_id: @user.id)
            @user.default_notebook = notebook.id
            @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        if @user.update(update_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password, :user_icon)
    end

    def update_params
        params.require(:user).permit(:first_name, :last_name, :user_icon)
    end
end
