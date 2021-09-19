defmodule Lotus.Block do
  @moduledoc """
  # TODO

  Documentation: https://getuikit.com/docs/block
  """
  use Lotus.ContainerComponent

  @doc """
  inline
  """
  prop inline, :boolean

  slot default

  def render(assigns) do
    if assigns.inline do
      with_span(assigns)
    else
      with_div(assigns)
    end
  end

  defp with_div(assigns) do
    ~F"""
    <div class={block_class(assigns)} {...@opts}>
      <#slot />
    </div>
    """
  end

  defp with_span(assigns) do
    ~F"""
    <span class={block_class(assigns)} {...@opts}>
      <#slot />
    </span>
    """
  end

  defp block_class(assigns) do
    container_base_classes(assigns)
  end
end
