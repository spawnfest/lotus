defmodule Lotus.CommentHeader do
  @moduledoc """
  Header of a comment
  """
  use Surface.Component, slot: "comment_header"
  use Lotus.Props.Text
  use Lotus.Props.Utility
  use Lotus.Props.FallbackClass

  @doc """
  Title for this comment header
  """
  slot comment_title

  @doc """
  Meta of this comment header
  """
  slot comment_meta

  @doc """
  Avatar of this comment header
  """
  slot comment_avatar

  def render(assigns) do
    ~F"""
    <header class={comment_header_class(assigns)}>
      <#slot name="comment_title" />
      <#slot name="comment_meta" />
    </header>
    """
  end

  defp comment_header_class(assigns) do
    [
      Surface.css_class("uk-comment-header": true)
    ] ++ text_class(assigns) ++ utility_class(assigns) ++ fallback_class(assigns)
  end
end
