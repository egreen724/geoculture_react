class AddColumnsToArtworks < ActiveRecord::Migration[5.2]
  def change
    change_column :artworks, :favorite, :boolean, default: false
    add_column :artworks, :slug, :string
    add_column :artworks, :artsy_id, :string
  end
end
