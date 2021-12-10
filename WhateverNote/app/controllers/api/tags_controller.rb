class Api::TagsController < ApplicationController
    def index
        @tags = Tag.all.where(author_id: current_user.id)
    end

    def show
        @tag = Tag.select(:id, :name).where(id: params[:id]).includes(:notes).first
    end

    def create
        @tag = Tag.new(tag_params)
        @tag.author_id = current_user.id
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def update
        @tag = Tag.find(params[:id])
        if @tag.update(tag_params)
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end 
    end

    def destroy
        @tag = Tag.find(params[:id])
        @tag.destroy
        render :show
    end

    private
    def tag_params
        params.require(:tag).permit(:name)
    end
end