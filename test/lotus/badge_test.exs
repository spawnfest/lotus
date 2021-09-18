defmodule Lotus.BadgeTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_badge

  alias Lotus.Badge

  test "Creates a badge, defaults to span" do
    html =
      render_surface do
        ~F"""
        <Badge>Hello</Badge>
        """
      end

    assert html =~ """
           <span class="uk-badge">
             Hello
           </span>
           """
  end

  test "Creates a badge with given element of link" do
    html =
      render_surface do
        ~F"""
        <Badge el="a" opts={href: "#"}>
          Hello
        </Badge>
        """
      end

    assert html =~ """
           <a href="#" class="uk-badge">
             Hello
           </a>
           """
  end

  test "Creates a badge with additional classes" do
    html =
      render_surface do
        ~F"""
        <Badge class="uk-padding">
          Hello
        </Badge>
        """
      end

    assert html =~ """
           <span class="uk-badge uk-padding">
             Hello
           </span>
           """
  end
end
