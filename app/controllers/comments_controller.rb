class CommentsController < ApplicationController
  def create
    post = Post.find(params[:post_id])
    comment = Post.comments.create(comment_params)
    respond_with post, comment
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.increment!(:votes)
    respond_with post, comment
  end

  def downvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.decrement!(:votes)
    respond_with post, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end