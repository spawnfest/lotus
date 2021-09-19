defmodule Lotus.Props.Transition do
  @moduledoc """
  <docs> https://getuikit.com/docs/transition
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Doc of transition_type
      """
      prop transition, :string, values: ~w/
        fade
        scale-up
        scale-down
        slide-top
        slide-bottom
        slide-left
        slide-right
        slide-top-small
        slide-bottom-small
        slide-left-small
        slide-right-small
        slide-top-medium
        slide-bottom-medium
        slide-left-medium
        slide-right-medium
      /

      defp transition_class(assigns) do
        Surface.css_class("uk-transition-#{assigns.transition}": assigns.transition)
        |> List.wrap()
      end
    end
  end
end
