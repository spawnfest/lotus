defmodule Lotus.Article do
  @moduledoc """
  Create articles within your page.

  Documentation: https://getuikit.com/docs/article
  """
  use Lotus.ContainerComponent

  slot article_title
  slot article_meta

  slot default

  def render(assigns) do
    ~F"""
    <article class={article_class(assigns)} {...@opts}>
      <#slot name="article_title" />
      <#slot name="article_meta" />
      <#slot name="default" />
    </article>
    """
  end

  defp article_class(assigns) do
    [
      Surface.css_class("uk-article": true) | container_base_classes(assigns)
    ]
  end
end
