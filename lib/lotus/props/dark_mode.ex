defmodule Lotus.Props.DarkMode do
  @moduledoc """
  <docs> https://getuikit.com/docs/dark_mode
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Dark or Light?
      """
      prop dark_mode, :string, values: ~w/on off/

      defp dark_mode_class(assigns) do
        Surface.css_class(
          "uk-light": assigns.dark_mode == "off",
          "uk-dark": assigns.dark_mode == "on"
        )
        |> List.wrap()
      end
    end
  end
end
