defmodule Lotus.LabelTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_label

  alias Lotus.Label

  test "Creates a Label" do
    html =
      render_surface do
        ~F"""
        <Label>Hello</Label>
        """
      end

    assert html =~ """
           <div class="uk-label">
             Hello
           </div>
           """
  end

  test "Creates a colored Label" do
    html =
      render_surface do
        ~F"""
        <Label color="warning">Warning</Label>
        """
      end

    assert html =~ """
           <div class="uk-label uk-label-warning">
             Warning
           </div>
           """
  end
end
