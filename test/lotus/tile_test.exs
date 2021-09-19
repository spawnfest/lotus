defmodule Lotus.TileTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_tile

  alias Lotus.Tile

  test "Creates a Tile" do
    html =
      render_surface do
        ~F"""
        <Tile>Hello</Tile>
        """
      end

    assert html =~ """
           <div class="uk-tile uk-tile-default">
             Hello
           </div>
           """
  end

  test "Creates a Tile with props" do
    html =
      render_surface do
        ~F"""
        <Tile color="muted" class="uk-padding-remove">
          Hello
        </Tile>
        """
      end

    assert html =~ """
           <div class="uk-tile uk-tile-muted uk-padding-remove">
             Hello
           </div>
           """
  end
end
