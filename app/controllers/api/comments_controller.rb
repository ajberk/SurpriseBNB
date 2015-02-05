class Api::CommentsController < Api::ApiController
  
  def create
    listing = current_user.listings.find(params[:id])
    @comment = listing.comments.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy

  end

  private
  def comment_params
    self.params.require(:listing).permit(:body)
  end
end
