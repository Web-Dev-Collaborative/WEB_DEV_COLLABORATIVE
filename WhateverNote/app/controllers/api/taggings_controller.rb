class Api::TaggingsController < ApplicationController
    def create
        @tagging = Tagging.new(tagging_params)
        if @tagging.save()
            render json: {success: tagging_params}
        else
            render json: @tagging.errors.full_messages, status: 422
        end
    end

    def destroy
        @tagging = Tagging.find_by(note_id: params[:note_id], tag_id: params[:tag_id])
        if @tagging
            @tagging.destroy
            render json: {success: "Tagging destroyed"}
        else
            render json: {error: "Tagging not found"}
        end
    end

    private
    def tagging_params
        params.require(:tagging).permit(:note_id, :tag_id)
    end
end