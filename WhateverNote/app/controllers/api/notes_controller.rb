class Api::NotesController < ApplicationController
    def show
        @note = Note.find(params[:id])
    end

    def index
        @notes = Note.all.where(author_id: current_user.id)
    end

    def create
        @note = Note.new(note_params)
        @note.author_id = current_user.id
        if @note.save
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def update
        @note = Note.find_by(id: params[:id])
        if @note.update(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = Note.find_by(id: params[:id])
        @note.destroy
        render :show
    end

    private
    def note_params
        params.require(:note).permit(:title, :body, :notebook_id)
    end
end