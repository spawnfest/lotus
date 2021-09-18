defmodule Lotus.Props.Padding do
  @moduledoc """
  Padding props. Adds padding to any element. See more: https://getuikit.com/docs/padding
  """
  defmacro __using__(_) do
    quote do
      @padding_values ~w/default small large/

      @doc """
      Padding size
      """
      prop padding, :string, values: @padding_values

      @doc """
      Remove vertical or horizontal padding only
      """
      prop remove_padding, :string, values: ~w/default vertical horizontal top bottom/

      defp padding_class(assigns) do
        Surface.css_class(
          "uk-padding": assigns.padding == "default",
          "uk-padding-#{assigns.padding}": assigns.padding,
          "uk-padding-remove": assigns.remove_padding == "default",
          "uk-padding-remove-#{assigns.remove_padding}": assigns.remove_padding
        )
        |> List.wrap()
      end
    end
  end
end
