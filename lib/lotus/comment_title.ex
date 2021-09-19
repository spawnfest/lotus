defmodule Lotus.CommentTitle do
  @moduledoc """
  Title of a comment
  """
  use Surface.Component
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  slot default

  def render(assigns) do
    ~F"""
    <h4 class={comment_title_class(assigns)}>
      <#slot />
    </h4>
    """
  end

  defp comment_title_class(assigns) do
    [
      Surface.css_class("uk-comment-title": true)
    ] ++ text_class(assigns) ++ utility_class(assigns) ++ fallback_class(assigns)
  end
end
