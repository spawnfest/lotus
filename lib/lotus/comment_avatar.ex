defmodule Lotus.CommentAvatar do
  @moduledoc """
  Avatar of a comment
  """
  use Surface.Component, slot: "comment_avatar"
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  @doc """
  Source of the image
  """
  prop src, :string, required: true

  @doc """
  Alt text
  """
  prop alt, :string

  def render(assigns) do
    ~F"""
    <img class={comment_avatar_class(assigns)} src={@src} alt={@alt} />
    """
  end

  defp comment_avatar_class(assigns) do
    [
      Surface.css_class("uk-comment-avatar": true)
    ] ++ text_class(assigns) ++ utility_class(assigns) ++ fallback_class(assigns)
  end
end
