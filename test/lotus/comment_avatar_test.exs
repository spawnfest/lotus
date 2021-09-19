defmodule Lotus.CommentAvatarTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_comment_avatar

  alias Lotus.CommentAvatar

  test "Creates a CommentAvatar" do
    html =
      render_surface do
        ~F"""
        <CommentAvatar />
        """
      end

    assert html =~ """
           <img class="uk-comment-avatar">
           """
  end
end
