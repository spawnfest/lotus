defmodule Lotus.Heading do
  @moduledoc """
  Define different styles for headings.TODO

  Documentation: https://getuikit.com/docs/heading
  """
  use Lotus.SimpleComponent

  @doc """
  size
  """
  prop size, :string, values: ~w/small medium large xlarge 2xlarge/

  @doc """
  divider
  """
  prop divider, :boolean

  @doc """
  bullet
  """
  prop bullet, :boolean

  @doc """
  level
  """
  prop level, :integer, default: 1, values: [1, 2, 3, 4, 5, 6]

  @doc """
  line
  """
  prop line, :boolean

  slot default

  def render(assigns) do
    case assigns.level do
      1 -> assigns |> h1()
      2 -> assigns |> h2()
      3 -> assigns |> h3()
      4 -> assigns |> h4()
      5 -> assigns |> h5()
      6 -> assigns |> h6()
    end
  end

  defp h1(assigns) do
    ~F"""
    <h1 class={heading_class(assigns)} {...@opts}>{with_span(assigns)}</h1>
    """
  end

  defp h2(assigns) do
    ~F"""
    <h2 class={heading_class(assigns)} {...@opts}>{with_span(assigns)}</h2>
    """
  end

  defp h3(assigns) do
    ~F"""
    <h3 class={heading_class(assigns)} {...@opts}>{with_span(assigns)}</h3>
    """
  end

  defp h4(assigns) do
    ~F"""
    <h4 class={heading_class(assigns)} {...@opts}>{with_span(assigns)}</h4>
    """
  end

  defp h5(assigns) do
    ~F"""
    <h5 class={heading_class(assigns)} {...@opts}>{with_span(assigns)}</h5>
    """
  end

  defp h6(assigns) do
    ~F"""
    <h6 class={heading_class(assigns)} {...@opts}>{with_span(assigns)}</h6>
    """
  end

  defp with_span(assigns) do
    if assigns.line do
      ~F"""
      <span><#slot /></span>
      """
    else
      ~F"""
      <#slot />
      """
    end
  end

  defp heading_class(assigns) do
    [
      Surface.css_class(
        "uk-heading-#{assigns.size}": assigns.size,
        "uk-heading-divider": assigns.divider,
        "uk-heading-bullet": assigns.bullet,
        "uk-heading-line": assigns.line
      )
      | simple_base_classes(assigns)
    ]
  end
end
