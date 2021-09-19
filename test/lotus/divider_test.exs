defmodule Lotus.DividerTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_divider

  alias Lotus.Divider

  test "Creates a small divider" do
    html =
      render_surface do
        ~F"""
        <Divider type="small" />
        """
      end

    assert html =~ """
           <hr class="uk-divider-small">
           """
  end

  test "Creates a vertical divider" do
    html =
      render_surface do
        ~F"""
        <Divider type="vertical" />
        """
      end

    assert html =~ """
           <hr class="uk-divider-vertical">
           """
  end

  test "Creates an icon divider" do
    html =
      render_surface do
        ~F"""
        <Divider type="icon" />
        """
      end

    assert html =~ """
           <hr class="uk-divider-icon">
           """
  end

  test "Creates a divider with classes" do
    html =
      render_surface do
        ~F"""
        <Divider type="icon" class="uk-divider-small" />
        """
      end

    assert html =~ """
           <hr class="uk-divider-icon uk-divider-small">
           """
  end
end
