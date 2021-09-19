defmodule Lotus.CommentTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_comment

  alias Lotus.Comment

  test "Creates a Comment" do
    html =
      render_surface do
        ~F"""
        <Comment />
        """
      end

    assert html =~ """
           <article class="uk-comment">
           </article>
           """
  end
end
