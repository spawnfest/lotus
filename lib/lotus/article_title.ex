defmodule Lotus.ArticleTitle do
  @moduledoc """
  Article title to be used in slot
  """
  use Surface.Component, slot: "article_title"
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  slot default

  def render(assigns) do
    ~F"""
    <h1 class={article_title_class(assigns)}>
      <#slot />
    </h1>
    """
  end

  defp article_title_class(assigns) do
    [
      Surface.css_class("uk-article-title": true)
    ] ++ text_class(assigns) ++ fallback_class(assigns)
  end
end
