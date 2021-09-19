defmodule Lotus.Article do
  @moduledoc """
  # TODO

  Documentation: https://getuikit.com/docs/article
  """
  use Lotus.Component

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
      Surface.css_class("uk-article": true) | base_classes(assigns)
    ]
  end
end
