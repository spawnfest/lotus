defmodule Lotus.CommentBodyTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_comment_body

  alias Lotus.CommentBody

  test "Creates a CommentBody" do
    html =
      render_surface do
        ~F"""
        <CommentBody>Hello</CommentBody>
        """
      end

    assert html =~ """
           <div class="uk-comment-body">
             Hello
           </div>
           """
  end
end
