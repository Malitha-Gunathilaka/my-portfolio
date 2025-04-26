export default function Footer() {
    return (
      <footer className="text-center py-6 border-t border-red-500 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Malitha. All rights reserved.
      </footer>
    );
  }