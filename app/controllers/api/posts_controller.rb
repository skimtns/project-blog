class Api::PostsController < ApplicationController
  before_action :set_blog
  before_action :set_post, only: [:show, :update, :destroy]
  
  def index
      render json: @blog.posts.all
  end
  
  def show
      render json: @post
  end
  
  def create
      @post = @blog.posts.new(post_params)
      if @post.save
      render json: @post
      else
      render json: @post.errors, status: 422
      end
  end
  
  def update
      if @post.update(post_params)
      render json: @post
      else
      render json: @post.errors, status: 422
      end
  end
  
  def destroy
      @post.destroy
  end
  
  private
      def set_blog
      @blog = Blog.find(params[:blog_id])
      end
      def set_post
      @post = @blog.posts.find(params[:id])
      end
  
      def post_params
      params.require(:post).permit(:name, :description, :body, :date)
      end
end
