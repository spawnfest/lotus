defmodule Lotus.Comment do
  @moduledoc """
  Includes styles for comments, for example for a blog section on your site.

  Documentation: https://getuikit.com/docs/comment
  """
  use Lotus.ContainerComponent

  @doc """
  primary (Small)
  """
  prop primary, :boolean

  slot comment_header
  slot comment_body

  def render(assigns) do
    ~F"""
    <article class={comment_class(assigns)} {...@opts}>
      <#slot name="comment_header" />
      <#slot name="comment_body" />
    </article>
    """
  end

  defp comment_class(assigns) do
    [
      Surface.css_class(
        "uk-comment": true,
        "uk-comment-primary": assigns.primary
      )
      | container_base_classes(assigns)
    ]
  end
end
