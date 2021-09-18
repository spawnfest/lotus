defmodule Lotus.Shared.Width do
  @moduledoc """
  Helper for width related UIKit classes. These utility functions will be consumed by any component that has width or responsiveness mixed in.

  They are defined at https://getuikit.com/docs/width
  """
  alias Lotus.Shared.Prefix

  @responsive_widths ~w/small medium large extra_large/a
  @width_specs ~w/
    1-1
    1-2
    1-3
    2-3
    1-4
    3-4
    1-5
    2-5
    3-5
    4-5
    1-6
    5-6
    small
    medium
    large
    xlarge
    2xlarge
    auto
    expand
  /

  @doc """
  Returns a list of width specs.
  """
  def width_specs, do: @width_specs

  @doc """
  Returns UIKit specific width classes

  ## Examples

      iex> Lotus.Shared.Width.width_class("1-1")
      "uk-width-1-1"

      iex> Lotus.Shared.Width.width_class("expand")
      "uk-width-expand"

  """
  def width_class(width) when width in @width_specs, do: Prefix.prefixed("width", width)

  @doc """
  Returns UIKit specific child width classes

  ## Examples

      iex> Lotus.Shared.Width.child_width_class("1-1")
      "uk-child-width-1-1"

      iex> Lotus.Shared.Width.child_width_class("expand")
      "uk-child-width-expand"

  """
  def child_width_class(width) when width in @width_specs,
    do: Prefix.prefixed("child-width", width)

  @doc """
  Returns the @ appended responsive width class given width metric and target width.

    ## Examples

      iex> Lotus.Shared.Width.responsive_width_class("1-1", :small)
      "uk-width-1-1@s"

      iex> Lotus.Shared.Width.responsive_width_class("expand", :large)
      "uk-width-expand@l"
  """
  def responsive_width_class(width, target),
    do: responsive_width_for(width, target, &width_class/1)

  @doc """
  Returns the @ appended responsive child width class given width metric and target width.

    ## Examples

      iex> Lotus.Shared.Width.responsive_child_width_class("1-1", :small)
      "uk-child-width-1-1@s"

      iex> Lotus.Shared.Width.responsive_child_width_class("expand", :large)
      "uk-child-width-expand@l"
  """
  def responsive_child_width_class(width, target),
    do: responsive_width_for(width, target, &child_width_class/1)

  defp responsive_width_for(width, target, fun) when target in @responsive_widths do
    suffix =
      case target do
        :small -> "s"
        :medium -> "m"
        :large -> "l"
        :extra_large -> "xl"
      end

    "#{fun.(width)}@#{suffix}"
  end

  @doc """
  Helper function to get a list of width related classes from `assigns`.

  ## Examples

      iex> Lotus.Shared.Width.assigns_to_width_classes(%{})
      []

      iex> Lotus.Shared.Width.assigns_to_width_classes(%{width: "1-1"})
      ["uk-width-1-1"]

      iex> Lotus.Shared.Width.assigns_to_width_classes(%{small: "1-1"})
      ["uk-width-1-1@s"]

      iex> Lotus.Shared.Width.assigns_to_width_classes(%{small: "1-1", medium: "1-2", large: "1-3", extra_large: "1-1"})
      ["uk-width-1-1@xl", "uk-width-1-3@l", "uk-width-1-2@m", "uk-width-1-1@s"]

      iex> Lotus.Shared.Width.assigns_to_width_classes(%{small: "1-1", medium: "1-2", width: "1-3"})
      ["uk-width-1-3", "uk-width-1-2@m", "uk-width-1-1@s"]
  """
  def assigns_to_width_classes(assigns) do
    assigns_to_width(assigns) ++ responsive_assigns_to_width(assigns)
  end

  @doc """
  Helper function to get a list of width related child classes from `assigns`.

  ## Examples

      iex> Lotus.Shared.Width.assigns_to_child_width_classes(%{})
      []

      iex> Lotus.Shared.Width.assigns_to_child_width_classes(%{width: "1-1"})
      ["uk-child-width-1-1"]

      iex> Lotus.Shared.Width.assigns_to_child_width_classes(%{small: "1-1"})
      ["uk-child-width-1-1@s"]

      iex> Lotus.Shared.Width.assigns_to_child_width_classes(%{small: "1-1", medium: "1-2", large: "1-3", extra_large: "1-1"})
      ["uk-child-width-1-1@xl", "uk-child-width-1-3@l", "uk-child-width-1-2@m", "uk-child-width-1-1@s"]

      iex> Lotus.Shared.Width.assigns_to_child_width_classes(%{small: "1-1", medium: "1-2", width: "1-3"})
      ["uk-child-width-1-3", "uk-child-width-1-2@m", "uk-child-width-1-1@s"]
  """
  def assigns_to_child_width_classes(assigns) do
    assigns_to_width(assigns, true) ++ responsive_assigns_to_width(assigns, true)
  end

  defp assigns_to_width(_, child \\ false)

  defp assigns_to_width(%{width: width}, child) when width in @width_specs,
    do: [(child && child_width_class(width)) || width_class(width)]

  defp assigns_to_width(_, _), do: []

  defp responsive_assigns_to_width(assigns, child \\ false) do
    assigns
    |> Map.take(@responsive_widths)
    |> Enum.flat_map(fn
      {_, nil} ->
        []

      {target, width} ->
        [
          (child && responsive_child_width_class(width, target)) ||
            responsive_width_class(width, target)
        ]
    end)
  end
end
