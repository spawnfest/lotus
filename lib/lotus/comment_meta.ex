defmodule Lotus.CommentMeta do
  @moduledoc """
  Comment meta data
  """
  use Surface.Component
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  slot default

  prop subnav, :boolean

  def render(assigns) do
    ~F"""
    <ul class={comment_meta_class(assigns)}>
      <#slot />
    </ul>
    """
  end

  defp comment_meta_class(assigns) do
    [
      Surface.css_class("uk-comment-meta": true, "uk-subnav": assigns.subnav)
    ] ++ text_class(assigns) ++ utility_class(assigns) ++ fallback_class(assigns)
  end
end
