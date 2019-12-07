class CreateArtworkTable < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :artist
      t.string :medium
      t.integer :year
      t.string :collecting_institution
      t.string :location
      t.string :image_url
      t.string :thumbnail_url
      t.boolean :favorite
    end
  end
end
