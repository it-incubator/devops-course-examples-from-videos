.PHONY: check check-1-2 check-2-1 check-2-3 check-3-2 check-1-3 check-3-1

check: check-1-2 check-2-1 check-2-3 check-3-2 check-1-3 check-3-1

check-1-2:
	@echo "🔍 ✅ service1 ➡️  service2  (same net-1-2, expect OK)"
	-docker compose exec service1 nslookup service2

check-2-1:
	@echo "🔍 ✅ service2 ➡️  service1  (same net-1-2, expect OK)"
	-docker compose exec service2 nslookup service1

check-2-3:
	@echo "🔍 ✅ service2 ➡️  service3  (same net-2-3, expect OK)"
	-docker compose exec service2 nslookup service3

check-3-2:
	@echo "🔍 ✅ service3 ➡️  service2  (same net-2-3, expect OK)"
	-docker compose exec service3 nslookup service2

check-1-3:
	@echo "🔍 ❌ service1 ➡️  service3  (different nets, expect FAIL)"
	-docker compose exec service1 nslookup service3

check-3-1:
	@echo "🔍 ❌ service3 ➡️  service1  (different nets, expect FAIL)"
	-docker compose exec service3 nslookup service1
