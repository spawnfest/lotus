defmodule Lotus.Props.Height do
  @moduledoc """
  Define the height of elements depending on the viewport or match the heights of different elements.

  Documentation: https://getuikit.com/docs/height
  """
  defmacro __using__(_) do
    quote do
      @doc """
      height
      """
      prop height, :string, values: ~w/1-1 small max-small medium max-medium large max-large/

      defp height_class(assigns) do
        Surface.css_class("uk-height-#{assigns.height}": assigns.height)
        |> List.wrap()
      end
    end
  end
end
