defmodule Lotus.ArticleMeta do
  @moduledoc """
  Article meta to be used in slot
  """
  use Surface.Component, slot: "article_meta"
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  slot default

  def render(assigns) do
    ~F"""
    <p class={article_meta_class(assigns)}>
      <#slot />
    </p>
    """
  end

  defp article_meta_class(assigns) do
    [
      Surface.css_class("uk-article-meta": true)
    ] ++ text_class(assigns) ++ fallback_class(assigns)
  end
end
