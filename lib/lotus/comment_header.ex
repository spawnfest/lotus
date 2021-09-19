defmodule Lotus.CommentHeader do
  @moduledoc """
  Header of a comment
  """
  use Surface.Component, slot: "comment_header"
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  slot default

  def render(assigns) do
    ~F"""
    <header class={comment_header_class(assigns)}>
      <#slot />
    </header>
    """
  end

  defp comment_header_class(assigns) do
    [
      Surface.css_class("uk-comment-header": true)
    ] ++ text_class(assigns) ++ utility_class(assigns) ++ fallback_class(assigns)
  end
end
