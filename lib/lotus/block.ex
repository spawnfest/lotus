defmodule Lotus.Block do
  @moduledoc """
  A block is a container for classes. It can be a Grid container, Flex container, or a panel.
  """
  use Lotus.ContainerComponent

  @doc """
  Is this block an inline?
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
