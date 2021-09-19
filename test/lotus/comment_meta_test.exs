defmodule Lotus.CommentMetaTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_comment_meta

  alias Lotus.CommentMeta

  test "Creates a CommentMeta" do
    html =
      render_surface do
        ~F"""
        <CommentMeta subnav>Hello</CommentMeta>
        """
      end

    assert html =~ """
           <ul class="uk-comment-meta uk-subnav">
             Hello
           </ul>
           """
  end
end
