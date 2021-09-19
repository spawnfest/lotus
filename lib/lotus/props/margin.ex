defmodule Lotus.Props.Margin do
  @moduledoc """
  <docs> https://getuikit.com/docs/margin
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Margin_size
      """
      prop margin_size, :string, values: ~w/small medium large xlarge/

      @doc """
      Margin
      """
      prop margin, :string, values: ~w/default top bottom left right/

      defp margin_class(assigns) do
        Surface.css_class(
          "uk-margin": assigns.margin == "default",
          "uk-margin-#{assigns.margin_size}-#{assigns.margin}":
            assigns.margin != "default" and assigns.margin_size,
          "uk-margin-#{assigns.margin_size}": assigns.margin == "default" and assigns.margin_size,
          "uk-margin-#{assigns.margin}":
            is_nil(assigns.margin_size) and assigns.margin in ~w/top bottom left right/
        )
        |> List.wrap()
      end
    end
  end
end
