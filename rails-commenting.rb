# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostController extends from the application controller essentially inherating all the information from the Application controller
class BlogPostsController < ApplicationController
  def index
    # ---2) posts is an instance variable and array which contains all the blog posts in the db.
    @posts = BlogPost.all
  end

  # ---3) show is a crud action/method which will allow the user to display the BlogPost using GET
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) also a CRUD action/method will display a form  for creating a new post and also uses GET 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)@post is an instance variable and is using .create  and will allow the user to create a new blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) @post is an instance variable and is using .find and allows the user to find a blog post in the db.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) @post is using .update which allows for the user to update a blogpost in the db.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) redirect is providing a pathway back to different page 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is used to make sure the methods created are only accessible within the specific class and not any where else.
  private
  def blog_post_params
    # ---10) params.require is used to require a specific parameter and the user passes in that correct parameter and .permit is giving permissions for the parameters being passed in.
    params.require(:blog_post).permit(:title, :content)
  end
end
