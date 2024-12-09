import { Button } from "@/components/ui/button"

interface BlogCategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categories = [
  { id: "all", name: "บทความทั้งหมด" },
  { id: "destinations", name: "จุดหมายปลายทาง" },
  { id: "learning", name: "การเรียนรู้" },
  { id: "culture", name: "วัฒนธรรม" },
  { id: "tips", name: "เคล็ดลับการท่องเที่ยว" },
  { id: "food", name: "อาหารและการกิน" },
]

export const BlogCategories = ({
  selectedCategory,
  onSelectCategory,
}: BlogCategoriesProps) => {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 font-semibold">หมวดหมู่</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
