defmodule Lotus.Props.Background do
  @moduledoc """
  <docs> https://getuikit.com/docs/background
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Doc of background_size
      """
      prop background, :string, default: "default", values: ~w/default muted primary secondary/

      @doc """
      Doc of background_size
      """
      prop background_size, :string, values: ~w/cover contain width-1-1 height-1-1/

      @doc """
      Doc of background_position
      """
      prop background_position, :string, values: ~w/
        top-left
        top-center
        top-right
        center-left
        center-center
        center-right
        bottom-left
        bottom-center
        bottom-right
      /

      @doc """
      Doc of background_no_repeat
      """
      prop background_no_repeat, :boolean

      @doc """
      Doc of background_fixed
      """
      prop background_fixed, :boolean

      @doc """
      Doc of background_blend
      """
      prop background_blend, :string, values: ~w/
        multiply
        screen
        overlay
        darken
        lighten
        color-dodge
        color-burn
        hard-light
        soft-light
        difference
        exclusion
        hue
        saturation
        color
        luminosity
      /

      @doc """
      Doc of background_image (Small)
      """
      prop background_image_small, :string

      @doc """
      Doc of background_image (Medium)
      """
      prop background_image_medium, :string

      @doc """
      Doc of background_image (Large)
      """
      prop background_image_large, :string

      @doc """
      Doc of background_image (Extra large)
      """
      prop background_image_xlarge, :string

      defp background_class(assigns) do
        Surface.css_class(
          "uk-background-#{assignes.background}": true,
          "uk-background-#{assigns.background_size}": assigns.background_size,
          "uk-background-#{assigns.background_position}": assigns.background_position,
          "uk-background-norepeat": assigns.background_no_repeat,
          "uk-background-fixed": assigns.background_fixed,
          "uk-background-blend-#{assigns.background_blend}": assigns.background_blend,
          "uk-background-image@s": assigns.background_image_small,
          "uk-background-image@m": assigns.background_image_medium,
          "uk-background-image@l": assigns.background_image_large,
          "uk-background-image@xl": assigns.background_image_xlarge
        )
        |> List.wrap()
      end
    end
  end
end
