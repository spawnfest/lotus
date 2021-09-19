defmodule Lotus.CommentBody do
  @moduledoc """
  body of a comment
  """
  use Surface.Component, slot: "comment_body"
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  slot default

  def render(assigns) do
    ~F"""
    <div class={comment_body_class(assigns)}>
      <#slot />
    </div>
    """
  end

  defp comment_body_class(assigns) do
    [
      Surface.css_class("uk-comment-body": true)
    ] ++ text_class(assigns) ++ utility_class(assigns) ++ fallback_class(assigns)
  end
end
