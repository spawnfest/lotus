defmodule Lotus.Props.Width do
  @moduledoc """
  Width props. Define the width of elements for different viewport sizes.

  See more: https://getuikit.com/docs/width
  """
  defmacro __using__(_) do
    quote do
      alias Lotus.Shared.Width, as: WidthHelper

      @doc """
      Width
      """
      prop width, :string, values: WidthHelper.width_specs()

      defp width_class(assigns) do
        WidthHelper.assigns_to_width_classes(assigns)
      end
    end
  end
end
