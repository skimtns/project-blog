require 'test_helper'

class CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get api/comments" do
    get comments_api/comments_url
    assert_response :success
  end

end
