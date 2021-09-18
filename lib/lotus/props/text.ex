defmodule Lotus.Props.Text do
  @moduledoc """
  A collection of utility classes to style text.

  Read more: https://getuikit.com/docs/text
  """
  defmacro __using__(_) do
    quote do
      @doc """
      Text style
      """
      prop text_lead, :string, values: ~w/lead meta/

      @doc """
      Font size
      """
      prop font_size, :string, values: ~w/small default large/

      @doc """
      Font weight
      """
      prop font_weight, :string, values: ~w/light normal bold lighter bolder/

      @doc """
      Italic
      """
      prop font_italic, :boolean

      @doc """
      Text Transform
      """
      prop text_transform, :string, values: ~w/capitalize uppercase lowercase/

      @doc """
      No text decoration
      """
      prop no_text_decoration, :boolean

      @doc """
      Text Color
      """
      prop text_color, :string,
        values: ~w/muted emphasis primary secondary success warning danger/

      @doc """
      Text horizontal alignment
      """
      prop text_align, :string, values: ~w/left right center justify/

      @doc """
      Text vertical alignment
      """
      prop text_valign, :string, values: ~w/top middle bottom baseline/

      @doc """
      Text wrapping
      """
      prop text_wrap, :string, values: ~w/truncate break nowarp/

      defp text_class(assigns) do
        Surface.css_class(
          "uk-text-#{assigns.text_lead}": assigns.text_lead,
          "uk-text-#{assigns.font_size}": assigns.font_size,
          "uk-text-#{assigns.font_weight}": assigns.font_weight,
          "uk-text-italic": assigns.font_italic,
          "uk-text-#{assigns.text_transform}": assigns.text_transform,
          "uk-text-decoration-none": assigns.no_text_decoration,
          "uk-text-#{assigns.text_color}": assigns.text_color,
          "uk-text-#{assigns.text_align}": assigns.text_align,
          "uk-text-#{assigns.text_valign}": assigns.text_valign,
          "uk-text-#{assigns.text_wrap}": assigns.text_wrap
        )
        |> List.wrap()
      end
    end
  end
end
