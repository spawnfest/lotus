defmodule Lotus.ListTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_list

  alias Lotus.List

  test "Creates a List" do
    html =
      render_surface do
        ~F"""
        <List>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>
        """
      end

    assert html =~ """
           <ul class="uk-list">
             <li>One</li>
             <li>Two</li>
             <li>Three</li>
           </ul>
           """
  end

  test "Creates a List with values" do
    html =
      render_surface do
        ~F"""
        <List color="muted" size="large" striped divider>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>
        """
      end

    assert html =~ """
           <ul class="uk-list uk-list-muted uk-list-divider uk-list-striped uk-list-large">
             <li>One</li>
             <li>Two</li>
             <li>Three</li>
           </ul>
           """
  end
end
