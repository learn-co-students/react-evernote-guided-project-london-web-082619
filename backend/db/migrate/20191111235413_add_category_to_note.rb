class AddCategoryToNote < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :category, :string
  end
end
