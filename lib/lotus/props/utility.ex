defmodule Lotus.Props.Utility do
  @moduledoc """
  Various utilities as defined in: https://getuikit.com/docs/utility
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Display property
      """
      prop display, :string, values: ~w/block inline inline-block/

      @doc """
      Border Radius
      """
      prop border_radius, :string, values: ~w/rounded circle pill/

      @doc """
      Box Shadow
      """
      prop box_shadow, :string, values: ~w/small medium large xlarge/

      @doc """
      Box shadow bottom
      """
      prop box_shadow_bottom, :boolean

      @doc """
      Hover
      """
      prop box_shadow_hover, :string, values: ~w/small medium large xlarge/

      @doc """
      Disabled
      """
      prop disabled, :boolean

      defp utility_class(assigns) do
        Surface.css_class(
          "uk-display-#{assigns.display}": assigns.display,
          "uk-border-#{assigns.border_radius}": assigns.border_radius,
          "uk-box-shadow-#{assigns.box_shadow}": assigns.box_shadow,
          "uk-box-shadow-bottom": assigns.box_shadow_bottom,
          "uk-box-shadow-hover-#{assigns.box_shadow_hover}": assigns.box_shadow_hover
        )
        |> List.wrap()
      end
    end
  end
end
