defmodule Lotus.Props.Flex do
  @moduledoc """
  Utilize the power of flexbox to create a wide range of layouts.

  Documentation: https://getuikit.com/docs/flex
  """
  defmacro __using__(_) do
    quote do
      @doc """
      flex
      """
      prop flex, :boolean

      @doc """
      flex_inline
      """
      prop flex_inline, :boolean

      @doc """
      flex_horizontal
      """
      prop flex_horizontal, :string, values: ~w/left center right between around/

      @doc """
      flex_vertical
      """
      prop flex_vertical, :string, values: ~w/stretch top middle bottom/

      @doc """
      flex_direction
      """
      prop flex_direction, :string, values: ~w/row row-reverse column column-reverse/

      @doc """
      flex_wrap
      """
      prop flex_wrap, :string, values: ~w/wrap wrap-reverse nowrap/

      @doc """
      flex_wrap_item
      """
      prop flex_wrap_item, :string, values: ~w/stretch between around top middle bottom/

      @doc """
      flex_item_order
      """
      prop flex_item_order, :string, values: ~w/first last/

      @doc """
      flex_dimensions
      """
      prop flex_dimensions, :string, values: ~w/none auto 1/

      @doc """
      flex_item_order (Small)
      """
      prop flex_item_order_small, :string, values: ~w/first last/

      @doc """
      flex_item_order (Medium)
      """
      prop flex_item_order_medium, :string, values: ~w/first last/

      @doc """
      flex_item_order (Large)
      """
      prop flex_item_order_large, :string, values: ~w/first last/

      @doc """
      flex_item_order (Extra large)
      """
      prop flex_item_order_xlarge, :string, values: ~w/first last/

      @doc """
      flex_horizontal_alignment (Small)
      """
      prop flex_horizontal_alignment_small, :string, values: ~w/left center right between around/

      @doc """
      flex_horizontal_alignment (Medium)
      """
      prop flex_horizontal_alignment_medium, :string, values: ~w/left center right between around/

      @doc """
      flex_horizontal_alignment (Large)
      """
      prop flex_horizontal_alignment_large, :string, values: ~w/left center right between around/

      @doc """
      flex_horizontal_alignment (Extra large)
      """
      prop flex_horizontal_alignment_xlarge, :string, values: ~w/left center right between around/

      defp flex_class(assigns) do
        Surface.css_class(
          "uk-flex": assigns.flex_inline == false or assigns.flex,
          "uk-flex-inline": assigns.flex_inline,
          "uk-flex-#{assigns.flex_horizontal}": assigns.flex_horizontal,
          "uk-flex-#{assigns.flex_vertical}": assigns.flex_vertical,
          "uk-flex-#{assigns.flex_direction}": assigns.flex_direction,
          "uk-flex-#{assigns.flex_wrap}": assigns.flex_wrap,
          "uk-flex-wrap-#{assigns.flex_wrap_item}": assigns.flex_wrap_item,
          "uk-flex-#{assigns.flex_item_order}": assigns.flex_item_order,
          "uk-flex-#{assigns.flex_dimensions}": assigns.flex_dimensions,
          "uk-flex-#{assigns.flex_item_order_small}@s": assigns.flex_item_order_small,
          "uk-flex-#{assigns.flex_item_order_medium}@m": assigns.flex_item_order_medium,
          "uk-flex-#{assigns.flex_item_order_large}@l": assigns.flex_item_order_large,
          "uk-flex-#{assigns.flex_item_order_xlarge}@xl": assigns.flex_item_order_xlarge,
          "uk-flex-#{assigns.flex_horizontal_alignment_small}@s":
            assigns.flex_horizontal_alignment_small,
          "uk-flex-#{assigns.flex_horizontal_alignment_medium}@m":
            assigns.flex_horizontal_alignment_medium,
          "uk-flex-#{assigns.flex_horizontal_alignment_large}@l":
            assigns.flex_horizontal_alignment_large,
          "uk-flex-#{assigns.flex_horizontal_alignment_xlarge}@xl":
            assigns.flex_horizontal_alignment_xlarge
        )
        |> List.wrap()
      end
    end
  end
end
