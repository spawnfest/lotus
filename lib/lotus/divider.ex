defmodule Lotus.Divider do
  @moduledoc """
  Create dividers to separate content and apply different styles to them. Documentation: https://getuikit.com/docs/divider
  """
  use Lotus.SimpleComponent

  @divider_types ~w/small icon vertical/

  @doc """
  What type of divider is it?
  """
  prop type, :string, values: @divider_types

  def render(assigns) do
    ~F"""
    <hr class={divider_class(assigns)}>
    """
  end

  defp divider_class(assigns) do
    ["uk-divider-#{assigns.type}"] ++ simple_base_classes(assigns)
  end
end
