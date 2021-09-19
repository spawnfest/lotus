defmodule Lotus.CommentHeaderTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_comment_header

  alias Lotus.CommentHeader

  test "Creates a CommentHeader" do
    html =
      render_surface do
        ~F"""
        <CommentHeader />
        """
      end

    assert html =~ """
           <header class="uk-comment-header">
           </header>
           """
  end
end
