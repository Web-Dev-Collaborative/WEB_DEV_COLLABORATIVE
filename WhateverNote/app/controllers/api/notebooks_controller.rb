class Api::NotebooksController < ApplicationController
    def show
        @notebook = Notebook.where(id: params[:id]).includes(:notes)[0]
    end

    def index
        @notebooks = Notebook.all.includes(:notes).where(author_id: current_user.id)
    end

    def create
        @notebook = Notebook.new(notebook_params)
        @notebook.author_id = current_user.id
        if @notebook.save
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebook.find(params[:id])
        if @notebook.update(notebook_params)
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def destroy
        @notebook = Notebook.find(params[:id])
        @notebook.destroy
        render :show
    end

    private
    def notebook_params
        params.require(:notebook).permit(:name)
    end
end