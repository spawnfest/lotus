defmodule Lotus.Props.ChildWidth do
  @moduledoc """
  Child width props. Define the child width of elements for different viewport sizes.

  See more: https://getuikit.com/docs/width
  """
  defmacro __using__(_) do
    quote do
      alias Lotus.Shared.Width, as: WidthHelper

      @doc """
      Child width
      """
      prop child_width, :string, values: WidthHelper.width_specs()

      defp child_width_class(assigns) do
        WidthHelper.assigns_to_child_width_classes(assigns)
      end
    end
  end
end
