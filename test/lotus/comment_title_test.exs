defmodule Lotus.CommentTitleTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_comment_title

  alias Lotus.CommentTitle

  test "Creates a CommentTitle" do
    html =
      render_surface do
        ~F"""
        <CommentTitle>Hello</CommentTitle>
        """
      end

    assert html =~ """
           <h4 class="uk-comment-title">
             Hello
           </h4>
           """
  end
end
