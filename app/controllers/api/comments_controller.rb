class Api::CommentsController < Api::ApiController

  def index
    @comment = Comment.all
    render json: @comment
  end

  def create
    listing = Listing.find(params[:listing_id])
    @comment = listing.comments.new(comment_params)
    # @comment.user_id = current_user.id

    # add user_id to comments

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
    self.params.require(:comment).permit(:body)
  end
end
